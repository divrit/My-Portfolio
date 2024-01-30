export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('typescript', 'darkred');
    static readonly JAVA = new Tag('Java', 'pink');
    static readonly SPRINGBOOT = new Tag('springboot', 'green');
    static readonly AWS = new Tag('Aws', 'orange');
    static readonly POSTGRESQL = new Tag('postgresql', 'brown');
    static readonly HTML = new Tag('html', 'purple');
    static readonly CSS = new Tag('css', 'blue');

    private constructor(private readonly key: String, public readonly color:string){

    }

    toString() {
        return this.key;
    }


}