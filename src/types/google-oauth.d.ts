interface GoogleOAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface GoogleTokenClient {
  requestAccessToken: () => void;
}

interface GoogleAccountsOAuth2 {
  initTokenClient: (config: {
    client_id: string;
    scope: string;
    callback: (response: GoogleOAuthResponse) => void;
  }) => GoogleTokenClient;
}

interface Google {
  accounts: {
    oauth2: GoogleAccountsOAuth2;
  };
}

declare global {
  interface Window {
    google: Google;
  }
}
