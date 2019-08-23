import { Component, OnInit } from '@angular/core';
import {ThirdPartyApiService} from '../../../../shared/services/third-party-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: {title: string, level: number}[] = [];
  tools: {title: string, imgSrc: string}[] = [];
  ojs: {title: string, description: string, imgSrc: string, link: string}[] = [];
  contests: {title: string, team: string, ranking: number, year: number}[] = [];

  githubRepos$: Observable<any>;

  constructor(private thirdPartyApiService: ThirdPartyApiService) { }

  ngOnInit() {
    this.addSkills();
    this.addTools();
    this.addOJs();
    this.addContests();
    this.getMyGithubRepos();
  }

  private addSkills() {
    this.skills.push({title: 'JavaScript', level: 70});
    this.skills.push({title: 'Angular', level: 80});
    this.skills.push({title: 'Redux', level: 80});
    this.skills.push({title: 'RxJS', level: 50});
    this.skills.push({title: 'ASP.NET Core', level: 40});
    this.skills.push({title: 'Node.js', level: 50});
    this.skills.push({title: 'Express', level: 50});
    this.skills.push({title: 'MongoDB', level: 30});
    this.skills.push({title: 'Problem Solving', level: 90});
    this.skills.push({title: 'C++', level: 80});
  }

  private addTools() {
    this.tools.push({title: 'JetBrains WebStorm', imgSrc: 'webstorm'});
    this.tools.push({title: 'Visual Studio', imgSrc: 'visual-studio'});
    this.tools.push({title: 'Git', imgSrc: 'git'});
    this.tools.push({title: 'Postman', imgSrc: 'postman'});
    this.tools.push({title: 'Bitbucket', imgSrc: 'bitbucket'});
    this.tools.push({title: 'Jira', imgSrc: 'jira'});
    this.tools.push({title: 'Heroku', imgSrc: 'heroku'});
  }

  private addOJs() {
    this.ojs.push({title: 'Codeforces', imgSrc: 'codeforces', description: 'Max Rating: 1843 (Expert)', link: 'https://codeforces.com/profile/sdpsarker88'});
    this.ojs.push({title: 'CodeChef', imgSrc: 'codechef', description: 'Max Rating: 2117 (5 star)', link: 'https://www.codechef.com/users/sudip_95'});
    this.ojs.push({title: 'Hackerrank', imgSrc: 'hackerrank', description: 'Max Rating: 1976', link: 'https://www.hackerrank.com/sudip_95'});
    this.ojs.push({title: 'CSAcademy', imgSrc: 'csacademy', description: 'Max Rating: 1622', link: 'https://csacademy.com/user/sdpsarker88'});
    this.ojs.push({title: 'Atcoder', imgSrc: 'atcoder', description: 'Max Rating: 1036', link: 'https://atcoder.jp/users/sudip_95'});
    this.ojs.push({title: 'LightOJ', imgSrc: 'lightoj', description: 'Total Solved: 248', link: 'http://lightoj.com/volume_userstat.php?user_id=18930'});
    this.ojs.push({title: 'UVa', imgSrc: 'uva', description: 'Total Solved: 211', link: 'https://uhunt.onlinejudge.org/id/696306'});
    this.ojs.push({title: 'Spoj', imgSrc: 'spoj', description: 'Total Solved: 77', link: 'https://www.spoj.com/users/sudip_95/'});
    this.ojs.push({title: 'Uri', imgSrc: 'uri', description: 'Total Solved: 166', link: 'https://www.urionlinejudge.com.br/judge/en/profile/53896'});
  }

  private addContests() {
    this.contests.push({title: 'ICPC Asia Dhaka Regional Contest', team: 'DU_Simplexity', ranking: 6, year: 2018});
    this.contests.push({title: 'Bangladesh IUBAT NCPC', team: 'DU_Simplexity', ranking: 8, year: 2018});
    this.contests.push({title: 'GREEN UNIVERSITY IUPC', team: 'DU_Simplexity', ranking: 14, year: 2018});
    this.contests.push({title: 'NSU Cybernauts NPC', team: 'DU_Simplexity', ranking: 20, year: 2018});
    this.contests.push({title: 'IUT 8TH ICT FEST Programming Contest', team: 'DU_Hufflepuffs', ranking: 14, year: 2016});
    this.contests.push({title: 'BUET CSE DAY IUPC', team: 'DU_Hufflepuffs', ranking: 20, year: 2016});
  }

  private getMyGithubRepos() {
    this.githubRepos$ = this.thirdPartyApiService.getGithubUserRepos('sudip1995');
    this.githubRepos$.subscribe(res => console.log(res));
    // html_url, name, description, fork, language, owner.login, owner.hrml_url
  }
}
