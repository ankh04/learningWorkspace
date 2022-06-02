<%*
const numberOfPrompts = 4;
const promptsFile = app.metadataCache.getFirstLinkpathDest("Daily-Journal-Prompts","");
const prompts = (await app.vault.read(promptsFile)).split("\n");
tR += "## Random Questions\n";
for(i=0;i<numberOfPrompts;i++) {
  n = Math.floor(Math.random()*prompts.length);
  if (prompts[n].length == 0) {
	  i--;
	  continue;
  }
  tR += "### [[" + prompts[n]+"]]\n\n";
}
%>

## Program Task  💻

## Regular Task  🤡
- [ ] [leetcode](https://leetcode.cn/study-plan/algorithms/?progress=tyz0ksg)
- [ ] [practice "声乐"](https://docs.google.com/spreadsheets/d/1F0zsAOoyfBXu63_U2zy0et0Ku1OxZ0DCDKUsEI5Ebjs/edit#gid=1676784532)
- [ ] [java基础](https://javaguide.cn/java/basis/java-basic-questions-01.html#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)
- [ ] [跨性别文献](https://transreads.org/tag/article/)
- [ ] [前端](https://web.qianguyihao.com)
- [ ] [知识星球](http://svip.iocoder.cn/index/index.html)
- [ ] [英语长难句](https://www.bilibili.com/video/BV1mC4y1p7Fh?p=154)

## Learning Task 🎯

## Life 🏄

## Summary ✍
####  WHAT HAVE I READ

#### WHAT HAVE I WATCH

#### WHAT HAVE I THOUGHT
