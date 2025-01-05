import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Read API base URL from .env
});

export async function fetchMoves() {
    const response = await axiosInstance.get('/moves');
    return response.data.moves;
  }
  
  export async function createGame() {
    const response = await axiosInstance.post('/create-game?player1_id=1&player2_id=2&rounds=10');
    return response.data;
  }
  
  export async function playRound(gameId, player2Move) {
    const response = await axiosInstance.post(`/play-game/${gameId}`, {
        player_move: player2Move,
    });
    return response.data;
  }
  
  export async function fetchGameSummary(gameId) {
    const response = await axiosInstance.get(`/games/${gameId}/summary`);
    return response.data;
  }


export default axiosInstance;