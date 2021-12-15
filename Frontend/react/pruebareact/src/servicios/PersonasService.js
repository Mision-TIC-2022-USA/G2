
import axios from 'axios';

const PERSONAS_API_BASE_URL = "http://localhost:8080/api/persona";

export function getPersonas() {
    return axios.get(`${PERSONAS_API_BASE_URL}/all`);
  }