import React from "react";

// function InstaPhotos() {
//     const photos;
//   return {<img alt="" className="insta-photo" src="" />;}
// }

// Getting a list object of user media:
// note that using /me will get the user from the access token

// Query the media node for a list of media:
// GET /me/media?fields=id,caption,media_type,media_url,permalink,timestamp,&access_token={access-token}

// here we request the caption, id, media type (IMAGE, VIDEO, CAROUSEL_ALBUM), url, permanent url, and timestamp. no caption for media in albums (think carousel)
// carousel_album media contain children. we want the first child in any carousel.
// should only need one of media_url and permalink
// sort by timestamp. only take the latest 5 or so

// Getting media in an album:

// IF media_type = CAROUSEL_ALBUM
// GET /{media-id}/children?fields=media_type,media_url,permalink&access_token={access-token}
