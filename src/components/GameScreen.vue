<template>
    <div>
      <h1 class="text-3xl font-bold">Rock, Paper, Scissors</h1>
      <p v-if="!gameId">Click "Start Game" to begin!</p>
      <button v-if="!gameId" @click="startGame" class="mt-5 mx-2 py-2 px-5 bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-300">Start Game</button>
  
      <div v-else>
        <h2>Round {{ currentRound }}</h2>
        <p>Select your move:</p>
        <button v-for="move in moves" :key="move" @click="submitMove(move)" class="mt-5 mx-2 py-2 px-5 bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-300">{{ move.name }}</button>
        <div v-if="gameResult" class="mt-4">
        <h3 class="text-lg font-bold mb-2">Round Results</h3>
        <div class="grid grid-cols-1 gap-4">
          <div
            class="border p-4 rounded bg-white shadow"
          >
            <h4 class="font-bold">Round {{ currentRound-1 }}</h4>
            <p><strong>Player 1 Move:</strong> {{ gameResult.player1_move }}</p>
            <p><strong>Player 2 Move:</strong> {{ gameResult.player2_move }}</p>
            <p>
              <strong>Winner:</strong>
              <span
                :class="{
                  'text-green-500': gameResult.winner === 'player1',
                  'text-blue-500': gameResult.winner === 'player2',
                  'text-gray-500': gameResult.winner === 'tie',
                }"
              >
                 {{ gameResult.winner }}
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>
  
      <summary-modal
        v-if="isGameOver"
        :summary="summary"
        @close="restartGame"
      />
    </div>
  </template>
  
  <script>
  import SummaryModal from './SummaryModal.vue';
  import { createGame, playRound, fetchMoves, fetchGameSummary } from '../axiosInstance';
  
  export default {
    components: { SummaryModal },
    data() {
      return {
        gameId: null,
        moves: [],
        currentRound: 1,
        totalRounds: 10,
        gameResult: null,
        summary: null,
        isGameOver: false,
      };
    },
    async created() {
      this.moves = await fetchMoves();
    },
    methods: {
      async startGame() {
        const game = await createGame();
        this.gameId = game.game_id;
      },
      async submitMove(player2Move) {
        const result = await playRound(this.gameId, player2Move.name);
        this.currentRound = result.current_round;
        this.gameResult = result.game_result;
        if (result.game_completed) {
          this.isGameOver = true;
          this.summary = result.game_summary;
        }
      },
      restartGame() {
        this.gameId = null;
        this.currentRound = 1;
        this.isGameOver = false;
        this.summary = null;
      },
    },
  };
  </script>
  