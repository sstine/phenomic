import test from "ava"
import redirectToHTML from ".."

test("should generate proper meta redirect HTML code", (t) => {
  const url = "/base/path"

  const result = `<html>

<head>
  <meta http-equiv="refresh" content="0;URL='${ url }'" />
</head>

<body>
  <p>
    Redirecting to <a href="${ url }">${ url }</a>...
  </p>
</body>

</html>`

  t.is(redirectToHTML("path", "base"), result)
})
