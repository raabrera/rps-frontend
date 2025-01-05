<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6">
        <h2 class="text-2xl font-bold mb-4 text-center">Game Summary</h2>
        <div class="space-y-2 text-lg">
          <p><strong>Total Rounds:</strong> {{ summary.total_rounds }}</p>
          <p><strong>Player 1 Wins:</strong> {{ summary.player1_wins }}</p>
          <p><strong>Player 2 Wins:</strong> {{ summary.player2_wins }}</p>
          <p><strong>Ties:</strong> {{ summary.ties }}</p>
          <p>
            <strong>Winner:</strong>
            <span
              :class="{
                'text-green-500': summary.player1_wins > summary.player2_wins,
                'text-blue-500': summary.player1_wins < summary.player2_wins,
                'text-gray-500': summary.player1_wins === summary.player2_wins,
              }"
            >
              {{ summary.player1_wins > summary.player2_wins ? 'Player 1' : summary.player1_wins < summary.player2_wins ? 'Player 2' : 'Tie' }}
            </span>
          </p>
        </div>
        <div class="mt-6 flex justify-center">
          <button
            @click="$emit('close')"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Close and Restart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['summary'],
  };
  </script>