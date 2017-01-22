export default function log(args, groupName = 'Output') {
    console.group(groupName);
    for (let argName in args) {
      console.log(`${argName} = ${args[argName]}`);
    }
    console.groupEnd;
}
