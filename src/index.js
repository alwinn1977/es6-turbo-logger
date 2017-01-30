export default function log(args, groupName = 'Turbo Logger Output') {
    console.group(groupName);
    for (let argName in args) {
      if (args[argName] !== undefined) {
        console.log(`%c${argName} =`, 'color: #0f6717; font-weight: bold', args[argName]);
      } else {
        console.log(`%c${argName} =`, 'color: #e20000; font-weight: bold', args[argName]);
      }

    }
    console.groupEnd();
}
