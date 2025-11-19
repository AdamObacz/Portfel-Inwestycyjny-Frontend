const API_URL = "http://localhost:8000/api/auth";

//IMPORTANT: Nie uzywajcie fetcha, tylko tego customAxiosa mojego z utils.ts
//Poniewaz on ma ustawione withCredentials na true i dzieki temu cookiesy sa wysylane z kazdym zapytaniem do backendu
//Dodatkowo ogarnia błędy jeszcze i ne musicie wtedy try..catchowac w komponentach
export const authAPI = {
  register: async (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
  ) => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  getMe: async () => {
    const response = await fetch(`${API_URL}/me`, {
      method: "GET",
      credentials: "include",
    });
    return response.json();
  },

  logout: async () => {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
    return response.json();
  },
};
