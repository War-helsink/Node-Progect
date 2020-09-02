import { Component, State, h} from '@stencil/core';


@Component({
    tag: 'app-game',
    styleUrl: 'app-game.scss'
})


export class AppGame {
    @State() mas = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];
    @State() message = "";
    @State() obgect = ["X", "O"];
    @State() move = true;
    @State() victory = [0, 0];
    @State() save = [];
    @State() move_save = [true,false,true,false,true,false,true,false,true];
    


    nextMove(index) {
        if (this.mas[index] == "") {
            let f = [];
            for (let i of this.mas)
                f.push(i);

            this.save.push(f);

            if (this.move) {

                this.mas[index] = this.obgect[0];
                this.move = false;

            }
            else {
                this.mas[index] = this.obgect[1];
                this.move = true;

            }
        }
    }

    crosSover(move) {
        this.move = this.move_save[move];
        this.mas = this.save[move];
        let save = this.save;
        this.save = [];
        for (let i = 0; i < move; i++)
            this.save[i] = save[i];

    }

    checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let j = 0; j < this.obgect.length; j++) {
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (this.mas[a] === this.obgect[j] && this.mas[a] === this.mas[b] && this.mas[a] === this.mas[c]) {
                    this.move = true;
                    return j;
                }
            }
        }
        this.message = "";
        return null;

    }

    newStart() {
        this.save = [];
        this.victory = [0, 0];
        this.mas = [];
        for (let i = 0; i < 9; i++)
            this.mas.push("");
        this.move = true;
    }

    generationField() {
        let a = [];
        for (let i = 0; i < this.mas.length; i++) {
            a.push(
                <ion-label color="dark" class="game ion-no-margin ion-no-padding" onClick={() => this.nextMove(i)}><span>{this.mas[i]}</span></ion-label>
            );
        }
        return a;
    }
    generationTransition() {
        let b = [];
        b.push(
            <ion-item lines="none" class="ion-no-border">
                <ion-button size="small" color="dark" onClick={() => this.newStart()}>Start</ion-button>
            </ion-item>
        );

        if (this.save) {
            for (let i = 1; i < this.save.length + 1; i++) {
                b.push(
                    <ion-item lines="none" class="ion-no-border">
                        <ion-button size="small" color="dark" onClick={() => this.crosSover(i-1)}>{i}. Move</ion-button>
                    </ion-item>
                );
            }
        }
        return b;
    }

    sendMessage() {
        let games = this.checkWinner();
        if (games != null) {
            for (let i = 0; i < this.mas.length; i++)
                this.mas[i] = "";
            this.save = [];
            this.victory[games] = this.victory[games] + 1;

            if (games == 0)
                this.message = "X";
            else
                this.message = "O";
        }

    }

    moveGame() {
        if (this.move)
            return "X";
        else
            return "O";
    }

    render() {
        document.title = "Game";

        this.sendMessage();
        return [

            <ion-tabs>

                
                <ion-tab-bar slot="top">
                    <ion-tab-button tab="tab2">
                        <ion-icon name="apps"></ion-icon>
                        <ion-label>Game</ion-label>
                    </ion-tab-button>


                    <ion-tab-button tab="tab1">
                        <ion-icon name="arrow-undo-outline"></ion-icon>
                        <ion-label>Regulations</ion-label>
                    </ion-tab-button>


                </ion-tab-bar>

                


                <ion-tab tab="tab1">
                    <ion-nav>
                        <ion-content>

                            <ion-grid fixed>
                                <ion-row>
                                    <ion-col size="12">
                                        <ion-item color="primary">
                                            <ion-label >Интересно</ion-label>
                                            <ion-text color="">
                                                <h1>Nos-crosses is a logic game between two opponents on a square field of 3 by 3 cells or larger (up to an "endless field"). One of the players plays with "crosses", the other - with "noughts". The traditional Chinese game (Gomoku) uses black and white stones.</h1>
                                            </ion-text>

                                        </ion-item>
                                    </ion-col>
                                    <ion-col size="12">
                                        <ion-item color="primary">
                                            <ion-label >Интересно</ion-label>
                                            <ion-text color="">
                                                <h1>The players take turns putting 3x3 signs on the empty cells of the field (one is always crosses, the other is always zeroes). The first player to line up his 3 pieces vertically, horizontally or diagonally wins. The first move is made by the player placing crosses.

Usually, at the end of the game, the winning side crosses out its three signs (zero or cross), making up a continuous row.</h1>
                                            </ion-text>

                                        </ion-item>
                                    </ion-col>
                                    <ion-col size="12">
                                        <ion-item color="primary">
                                            <ion-label >Интересно</ion-label>
                                            <ion-text color="">
                                                <h1>For each side, there are well-known algorithms that guarantee a draw for any opponent's game, and if his opponent makes a mistake, they can win. Thus, the game is in a no-man's death state.

                                                Below are some of these strategies. It is considered that the player always observes two rules that take precedence over all others:

                                                Rule 1. If a player can win immediately, he does it.
Rule 2. If a player cannot win immediately, but his opponent could immediately win by making a move to a cell, the player himself makes a move to that cell, preventing an immediate loss.</h1>
                                            </ion-text>

                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-content>
                    </ion-nav>

                </ion-tab>




                <ion-tab tab="tab2">
                    <ion-nav>
                        <ion-content>

                            <ion-grid fixed>
                                <ion-row>
                                    <ion-col size="0" size-lg="3">

                                    </ion-col>
                                    <ion-col size="12" size-lg="6">
                                        <ion-item class=" ion-no-border" color="primary">
                                            <ion-label slot="start" class="ion-no-border">X:{this.victory[0]}</ion-label>
                                            <ion-label slot="start" class=" ion-no-border">O:{this.victory[1]}</ion-label>
                                            <ion-label slot="start" class=" ion-no-border">Winner:{this.message}</ion-label>
                                            <ion-label slot="start" class=" ion-no-border">Move:{this.moveGame()}</ion-label>
                                        </ion-item>
                                    </ion-col>

                                    <ion-col size="0" size-lg="3">

                                    </ion-col>
                                    <ion-col size="0" size-lg="4">
                                    </ion-col>

                                    <ion-col size="12" size-lg="4">
                                        <div class="grid">
                                            {this.generationField()}
                                        </div>
                                    </ion-col>


                                    <ion-col size="12" size-lg="2">
                                        <ion-list>
                                            {this.generationTransition()}
                                        </ion-list>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>


                        </ion-content>
                    </ion-nav>
                </ion-tab>


            </ion-tabs>





        ];
    }
}