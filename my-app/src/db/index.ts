import { news } from './news'
import { notices } from './notice'
import { members } from './member'
import { paper } from './paper'
import { seminars } from './seminars'
import { RRs } from './recent_research'
import { flexSlider } from './flexSlider'
import HREF from './hrefConstance'

export { HREF }


interface Props {
  offset?: number,
  limit?: number,
}

function fetchNewsOrNotices(data: (typeof news | typeof notices | typeof seminars), { offset, limit }: Props) {
  let s, e;
  if (offset && limit) {
    s = offset;
    e = offset + limit;
  } else {
    s = offset;
    e = limit;
  }
  const res = data
    .slice()
    .filter(val => !val.hide_cn)
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => Number(b.top) - Number(a.top))
    .slice(s, e);
  return res;
}

function fetchAllSeminars(data: typeof seminars, { offset, limit }: Props) {
  let s, e;
  if (offset && limit) {
    s = offset;
    e = offset + limit;
  } else {
    s = offset;
    e = limit;
  }
  const res = data
    .slice()
    .filter(val => !val.hide_cn)
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => Number(b.top) - Number(a.top))
    .slice(s, e);
  return res;
}

export function fetchNews(props: Props = {}) {
  return fetchNewsOrNotices(news, props);
}

export function fetchNotices(props: Props = {}) {
  return fetchNewsOrNotices(notices, props);
}

export function fetchSeminars(props: Props = {}) {
  return fetchAllSeminars(seminars, props);
}


export function fetchRecentResearch({ offset, limit }: Props = {}) {
  let s, e;
  if (offset && limit) {
    s = offset;
    e = offset + limit;
  } else {
    s = offset;
    e = limit;
  }
  const res = RRs
    .slice()
    .filter(val => val.show)
    .slice(s, e);
  return res;
}

type ITilte = "faculty" | "phd" | "master" | "undergraduate" | "alumni"
export function fetchMembers(title?: ITilte) {
  if (title) {
    return members.filter((val) => val.title === title);
  } else {
    return members;
  }
}

export function fetchPaper(year: number) {
  return paper.filter(p => p.year === year);
}

export function fetchPaperBefore(year: number) {
  return paper.filter(p => p.year <= year);
}

export function fetchFlexSlider() {
  return flexSlider.slice();
}


