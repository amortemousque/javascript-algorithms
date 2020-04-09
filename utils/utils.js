
import chalk from 'chalk'
import figlet from 'figlet'


export function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

export function parseParameter(data) {
    if (!data)
        return null

    try {
        return JSON.parse(data);
    } catch (e) {
        return false
    }
}

export function drawTitle(title) {
    console.log(
        chalk.yellow(
            figlet.textSync(title, { horizontalLayout: 'full' })
        )
    );
}

export function usageMenuRequested() {
    return process.argv.length <= 2
}

export function drawUsageMenu() {
    console.log(`
        Perform algorithm command.
  
        Usage:   algo [OPTIONS] COMMAND
        
        Options:
          -h, --help       Print help and quit
          -v, --version    Print version information and quit
        
        Commands:
          quicksort       Deploy stack or service according to stack dependencies
          merge-sort      Remove stack or service according to stack dependencies 
          
          binary-search   Remove stack or service according to stack dependencies 
  
        
        Run 'algo COMMAND --help for more information on a command.'
    
    `);
    process.exit();
}