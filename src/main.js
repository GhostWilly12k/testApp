let auth0Client = null;

const initAuth0 = async () => {
  try {
    auth0Client = await createAuth0Client({
      domain: "dev-zqdpmz3grpbabivp.us.auth0.com", 
      client_id: "SRswvRuxv7QciqBcPhgWFfs4EbHEmvCg",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
    console.log("Auth0 initialized successfully!");
  } catch (error) {
    console.error("Error initializing Auth0:", error);
  }
};

initAuth0();
