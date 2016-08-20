// @flow

import pathToUri from "../../_utils/path-to-uri"

export default (
  pathname: String,
  basename: String
): String => {

  const url = pathToUri("/", basename, pathname)

  return `<html>

<head>
  <meta http-equiv="refresh" content="0;URL='${ url }'" />
</head>

<body>
  <p>
    Redirecting to <a href="${ url }">${ url }</a>...
  </p>
</body>

</html>`
}
