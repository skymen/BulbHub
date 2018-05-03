<template>
    <div>
        <template v-for="item in items">
            <v-card class="white--text my-2" fluid :key="item.title">
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs1 class="pr-5 pl-3">
                            <v-layout column justify-center align-center>
                                <v-icon @click="voteUp" large>fas fa-sort-up</v-icon>
                                <span>{{ item.vote_up }}</span>
                                <span>{{ item.vote_down }}</span>
                                <v-icon @click="voteDown" large>fas fa-sort-down</v-icon>
                            </v-layout>
                        </v-flex>
                        <v-flex xs11>
                            <div>
                                <v-layout row>
                                    <v-flex xs11>
                                        <div class="headline">{{ item.title }}</div>
                                    </v-flex>
                                    <v-flex xs1>
                                        <v-menu bottom left>
                                            <v-btn icon slot="activator">
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                            <v-list>
                                                <v-list-tile v-for="(menuItem, i) in menuItems" :key="i"
                                                             @click="menuItem.action">
                                                    <v-list-tile-title>{{ menuItem.title }}
                                                    </v-list-tile-title>
                                                </v-list-tile>
                                            </v-list>
                                        </v-menu>
                                    </v-flex>
                                </v-layout>
                                <div v-html="markdown(item.description)"></div>
                                <GithubIssueLink v-for="issue in item.issues" :key="issue"
                                                 :to="issue"></GithubIssueLink>
                                <GithubPRLink v-for="pull_request in item.pull_requests" :key="pull_request"
                                              :to="pull_request"></GithubPRLink>
                                <GithubMilestone v-for="milestone in item.milestones" :key="milestone"
                                              :to="pull_request"></GithubMilestone>
                                <IdeaLabel v-for="label in item.labels" :key="label" :labelid="label"></IdeaLabel>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </template>
    </div>
</template>

<script>
import marked from 'marked';
import GithubIssueLink from '@/components/GithubIssueLink';
import GithubPRLink from '@/components/GithubPRLink';
import GithubMilestone from '@/components/GithubMilestone';
import IdeaLabel from '@/components/IdeaLabel';

export default {
  props: ['items'],
  data() {
    return {
      menuItems: [
        {
          title: 'Link pull request',
          action: () => this.linkPr(),
        },
        {
          title: 'Link issue',
          action: () => this.linkPr(),
        },
        {
          title: 'Add label',
          action: () => this.linkPr(),
        },
        {
          title: 'Add to milestone',
          action: () => this.linkPr(),
        },
      ],
    };
  },
  components: {
    GithubIssueLink,
    GithubPRLink,
    GithubMilestone,
    IdeaLabel,
  },
  methods: {
    voteUp() {

    },
    voteDown() {

    },
    linkPr() {

    },
    markdown(str) {
      return marked(str);
    },
  },
};
</script>

<style>

</style>
