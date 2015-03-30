var spawn = require('child_process').spawn

function run(mode) {
  console.log("Running " + mode)
  var proc = spawn('npm',['run',mode])
  proc.stdout.on('data',function(data) {
    process.stdout.write(data.toString())
  })
  proc.stderr.on('data',function(data) {
    process.stdout.write(data.toString())
  })
  proc.on('close',function(data) {
    process.stdout.write(data.toString())
    console.log("Ended " + mode)
  })
}

run('dev-www')
run('dev-css')
run('dev-js')