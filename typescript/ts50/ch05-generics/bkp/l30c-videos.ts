export const NAME = "l30c Index Types";

const log: Console["log"] = console.log.bind(console);

type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type SubtitleURLs = {
  german: URL,
  french: URL,
  english: URL,
};

declare const videos: VideoFormatURLs;


function isAvailable<Formats extends object>(
  obj: Formats,
  key: string | number | symbol ,
): key is keyof Formats {
  return key in obj;
}

function loadFormat(format: string): void {
  if (isAvailable(videos, format)) {
    const x = videos[format];
    log(x);
  }
};

type PossibleKeys = "meetup" | "conference" | "hackathon" | "webinar";

type Groups = {
  [key in PossibleKeys]: unknown;
};

type URLList = {
  [key in string]: URL;
};

//
// ‘extends’ indicates a constraint here. It means ‘Formats’
// must contain keys whose values are of the type ‘URL’.
//
declare function loadFile<Formats extends URLList>(
  fileFormats: Formats,
  format: string,
): void;

//
// ‘videos’ is an object with the certain string keys whose
// type is ‘URL’. That is OK.
//
// "foo", however, is not one of the possible formats, but
// no red squiggles. Let's fix that next.
//
loadFile(videos, "foo");
