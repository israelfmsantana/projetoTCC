import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewRanking',
    templateUrl: './viewRanking.component.html',
    styleUrl: './viewRanking.component.css'
})
export class viewRankingComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    leaderboard = [
        { rating: '34.678', name: 'The Lurker', wins: 220, wl: '78%', world: '1%' },
        { rating: '34.668', name: 'The AWPer', wins: 221, wl: '76%', world: '1%' },
        { rating: '34.663', name: 'The Rifler', wins: 221, wl: '76%', world: '1%' },
        { rating: '34.660', name: 'The Pro', wins: 219, wl: '75%', world: '1%' },
        { rating: '34.659', name: 'The Ninja', wins: 218, wl: '75%', world: '1%' },
        { rating: '34.656', name: 'The Nader', wins: 218, wl: '75%', world: '1%' },
        { rating: '34.654', name: 'Support Player', wins: 221, wl: '75%', world: '1%' },
        { rating: '34.638', name: 'The Bot', wins: 218, wl: '72%', world: '1%' },
        { rating: '34.589', name: 'The Baiter', wins: 218, wl: '70%', world: '1%' },
        { rating: '34.569', name: 'Entry Fragger', wins: 218, wl: '70%', world: '1%' },
        { rating: '34.548', name: 'Eco Fragger', wins: 216, wl: '68%', world: '1%' },
        { rating: '34.875', name: 'CS2', wins: 126, wl: '65%', world: '1%' },
    ];
    
    ngOnInit() {
        localStorage.setItem('lastRoute', '/viewRanking');
    }
}
