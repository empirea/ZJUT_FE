import { news } from '../../db/news'
import { notices } from '../../db/notice'
import { members } from '../../db/member'
import { seminars } from '@/db/seminars'
import { paper } from '../../db/paper'
import { RRs } from '../../db/recent_research'
import { flexSlider } from '../../db/flexSlider'
import HREF from './hrefConstance'

export { HREF }

function _copyObj<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

interface Props {
  offset?: number,
  limit?: number,
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
function fetchNewsOrNotices(data: (typeof news | typeof notices), { offset, limit }: Props) {
  let s, e;
  if (offset && limit) {
    s = offset;
    e = offset + limit;
  } else {
    s = offset;
    e = limit;
  }
  const res = _copyObj(data)
    .filter(val => !val.hide_en)
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => Number(b.top) - Number(a.top))
    .slice(s, e);
  // EN
  for (let key in res) {
    res[key].title = res[key].title_en;
    res[key].author = res[key].author_en;
    res[key].summary = res[key].summary_en;
    res[key].content = res[key].content_en;
  }
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
  const res = _copyObj(RRs)
    .filter(val => val.show)
    .slice(s, e);
  return res;
}

type ITilte = "faculty" | "phd" | "master" | "undergraduate" | "alumni"
export function fetchMembers(title?: ITilte) {
  let res;
  if (title) {
    res = members.filter((val) => val.title === title);
  } else {
    res = members;
  }
  res = _copyObj(res);
  for (let key in res) {
    res[key].name = res[key].name_en;
    res[key].titleDisplay = res[key].titleDisplay_en;
    res[key].directions = res[key].directions_en;
  }
  return res;
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
