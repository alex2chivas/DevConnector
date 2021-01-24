const { exec } = require('child_process')
let args = process.argv
args.splice(0, 2)
let str = args.join(' ')

console.log(str)
exec('git add .', cb)
exec(`git commit -m "${str}"`, cb)
exec(`git push`, cb)

function cb (err, sdout, sdin) {
  if (err) {
    console.log(err)
    return
  }
  // it worked
  console.log('Git updated')
}
