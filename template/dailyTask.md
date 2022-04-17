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
- [ ] leetcode
- [ ] practice "声乐"

## Learning Task 🎯

## Life 🏄

## Summary ✍
####  WHAT HAVE I READ

#### WHAT HAVE I WATCH

#### WHAT HAVE I THOUGHT
