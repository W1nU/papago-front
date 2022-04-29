export default {
  Auth: {
    mandatorySignIn: true,
    region: "ap-northeast-2",
    userPoolId: "ap-northeast-2_YkP8GWFFm",
    identityPoolId: "ap-northeast-2:894f1835-f053-4f33-9457-428c46cf61e5",
    userPoolWebClientId: "5nhae7rckfo9otf2ru4ha87ouf",
  },
  API: {
    endpoints: [
      {
        name: "tickle",
        endpoint: "https://test.tickleinvest.com/1",
        region: "ap-northeast-2",
      },
      {
        name: "openBanking",
        endpoint:
          "https://vi1z03n1cl.execute-api.ap-northeast-2.amazonaws.com/dev",
        region: "ap-northeast-2",
      },
      {
        name: "auth",
        endpoint:
          "https://tap32mksfe.execute-api.ap-northeast-2.amazonaws.com/dev",
        region: "ap-northeast-2",
      },
    ],
  },
};
