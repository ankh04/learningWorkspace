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
- [ ] [leetcode](https://leetcode.cn/study-plan/dynamic-programming/?progress=3yzxhug)
- [ ] [java基础](https://javaguide.cn/java/basis/java-basic-questions-01.html#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)
- [ ] [前端](https://web.qianguyihao.com)
- [ ] [知识星球](http://svip.iocoder.cn/index/index.html)
- [ ] [数据库](https://www.bilibili.com/video/BV1rN411f7Ef?vd_source=96c18635d20f0cc3b2c33ac78719180e)


## Learning Task 🎯
- [ ] [跨性别文献](https://transreads.org/tag/article/)
- [ ] [主义主义](https://space.bilibili.com/23191782/channel/seriesdetail?sid=1424248)

## Life 🏄
- [ ] [practice "声乐"](https://docs.google.com/spreadsheets/d/1F0zsAOoyfBXu63_U2zy0et0Ku1OxZ0DCDKUsEI5Ebjs/edit#gid=1676784532)
- [ ] 记录梦境
- [ ] 锻炼

## Summary ✍
####  WHAT HAVE I READ

#### WHAT HAVE I WATCH

#### WHAT HAVE I THOUGHT
