<%*
const numberOfPrompts = 3;
const promptsFile = app.metadataCache.getFirstLinkpathDest("Daily-Journal-Prompts","");
const prompts = (await app.vault.read(promptsFile)).split("\n");
tR += "## Random Questions\n";
for(i=0;i<numberOfPrompts;i++) {
  n = Math.floor(Math.random()*prompts.length);
  tR += "### [[" + prompts[n]+"]]\n\n";
}
%>

## Program Task  💻

## Regular Task  🤡
- [ ] leetcode

## Learning Task 🎯

## Life 🏄

## Summary ✍
####  WHAT HAVE I READ

#### WHAT HAVE I WATCH

#### WHAT HAVE I THOUGHT
