const API_KEY = "AIzaSyCI6158FT2X2p4gfq2xI2sT05MzAz_IJtA";

export const OFFSET_LIVE_MESSAGES = 25;

export const API_KEY_COMMENTS_API =
  "&key=AIzaSyCI6158FT2X2p4gfq2xI2sT05MzAz_IJtA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=30&videoId=";

export const COMMENT_REPLIES_API =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=";

export const VIDEO_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=viewCount&q=";

export const VIDEO_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
