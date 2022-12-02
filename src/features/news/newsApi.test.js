test("the data is peanut butter", () => {
  return fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bf3250e5fe4444cdaea8e021c2317fa4"
  ).then((data) => {
    if (data) {
      return {
        type: "default",
        status: 200,
        ok: true,
        statusText: "OK",
        headers: {
          map: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-cache",
            pragma: "no-cache",
            expires: "-1",
          },
        },
        url: "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bf3250e5fe4444cdaea8e021c2317fa4",
        bodyUsed: false,
        _bodyInit: {},
        _bodyBlob: {},
      };
    } else {
      console.log("Error from request news API");
    }
  });
});
