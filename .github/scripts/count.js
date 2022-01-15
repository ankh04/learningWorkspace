const { promises: fs } = require('fs');
const path = require('path');
const p = path.join(__dirname, '/../../dailyTask');
const reg = /- \[.\]/g;
const regComplete = /- \[x\]/g;
const keyVerbs = [
    'learn',
    'read',
    'watch',
    'buy',
];
let taskNum = 0;
let completeTaskNum = 0;
let taskObj = {};
async function myCount() {
    const files = await fs.readdir(p, { withFileTypes: false });
    for (let i = 0, len = files.length; i < len; i++) {
        const data = await fs.readFile(path.join(p, files[i]), 'utf8');
        const cate = data.split('##');
        cate.shift(); // delete the first item
        for (let j = 0, len = cate.length; j < len; j++) {
            const items = cate[j].split('\n');
            items.shift();
            for (let k = 0, len = items.length; k < len; k++) {
                if (reg.test(items[k])) {
                    // if there is a '- [ ]' or '- [x]', it will count
                    taskNum++;
                }
                if (regComplete.test(items[k])) {
                    // if there is a '- [ ]', it will count
                    completeTaskNum++;
                }
                for (let verb = 0, len = keyVerbs.length; verb < len; verb++) {
                    let regVerb = new RegExp('(?<=' + keyVerbs[verb] + ' ).*');
                    let noun = items[k].match(regVerb);
                    if (noun) {
                        noun = noun[0];
                        if (/《/.test(noun)) {
                            // extract content from 《 》
                            noun = noun.match(/(?<=《).*(?=》)/)[0];
                        }
                        if (taskObj[keyVerbs[verb]] && taskObj[keyVerbs[verb]].find(item => item.task === noun)) {
                            // if this noun is already exist
                            // increase the times
                            taskObj[keyVerbs[verb]].find(item => item.task === noun).times++;
                        } else {
                            if (!taskObj[keyVerbs[verb]]) taskObj[keyVerbs[verb]] = [];
                            taskObj[keyVerbs[verb]].push({
                                task: noun,
                                times: 1,
                            });
                        }
                    }

                }
            }
        }
    }
    // console.log('taskNum:', taskNum);
    // console.log('completeTaskNum:', completeTaskNum);
    // console.log('taskObj:', taskObj);
    return {
        taskNum,
        completeTaskNum,
        taskObj
    }
};

module.exports = myCount;


// fs.readFile(p, 'utf8', (err, data) => {
//     if (err) {
//         console.log('error:', err);
//     } else {
//         console.log('buffer:', data);
//     }
// })