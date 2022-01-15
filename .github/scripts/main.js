const count = require('./count.js');
const { promises: fs } = require('fs');
const path = require('path');
const p = path.join(__dirname, '../../README.md');

(async () => {
    const countRes = await count();

    let res = {};
    console.log('countRes:', countRes)

    res.taskNum = countRes.taskNum;
    res.completeTaskNum = countRes.completeTaskNum;
    res.completeRatio = (res.completeTaskNum / res.taskNum).toFixed(4) * 100 + '%';

    for (key in countRes.taskObj) {
        res[key + 'Num'] = countRes.taskObj[key].length;
        let list = '';
        countRes.taskObj[key].forEach(element => {
            list += `- 名称：${element.task}, 天数：${element.times}\n`;
        });
        res[key + 'Item'] = list;
    }
    let template = await fs.readFile(path.join(__dirname, 'template.md'), 'utf8')
    const mustacheReg = /\{\{.*?\}\}/g;
    const mustaches = template.match(mustacheReg);
    for (let i = 0, len = mustaches.length; i < len; i++) {
        const reg = new RegExp(mustaches[i], 'gm');
        template = template.replace(reg, res[mustaches[i].slice(2, -2)]);
    }
    // console.log('mustaches:', mustaches);
    // console.log('res:', res);
    // console.log('template:', template)
    fs.writeFile(p, template);
})()






