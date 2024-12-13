// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', 'createdOn', and 'comments'.

class BlogPost {
    // properties are defined as variables within the class
    authorName: string;
    title: string;
    text: string;
    createdOn: string;
    comments: string[];

  // TODO: Use a default parameter to set 'comments' to an empty array if no value is provided.
    constructor(authorNameArg: string, titleArg: string, textArg: string, createdOnArg: string) {
      this.authorName = authorNameArg;
      this.title = titleArg;
      this.text = textArg;
      this.createdOn = createdOnArg;
      this.comments = [];
    }

    // TODO: Give BlogPost a method called printMetaData() with a `void` return type that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData(): void {
        // void means the function does not return a value
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
      }

    // TODO: Give Blog Post a method called addComment() with a `void` return type that takes in a comment and adds it to the comments array.

    addComment(comment: string): void {
        this.comments.push(comment);
    }
}

// TODO: Create a class constructor called BlogComment that takes in 'authorName', 'text', and 'createdOn'.
// TODO: Give BlogComment a method called printMetaData() with a `void` return type that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

class BlogComment {
    autherName: string;
    text: string;
    createOn: String

    constructor(a: string, b: string, c: string){
        this.autherName = a;
        this.text = b;
        this.createOn = c;
    }

    printMetaData(): void {
        console.log(`Create by ${this.autherName} on ${this.createOn}
        with ${this.text}.`);
    }

    addComment(comment: BlogComment): void {
        this.comments.push(comment)
    }
}



    // TODO: Create a new object using the BlogComment class constructor.

 

    const post = new BlogPost('Avery', 'someTitle', 'myText', 'created on');


// TODO: Create a new object using the BlogPost class constructor and omit a value for 'comments'.


    const comment = new BlogComment("dan", "this is a comment", "created on date")

    const blogPost2 = new BlogPost('Avery', 'someTitle', 'myText', 'created on');


// TODO: Use the addComment() method on your newly created BlogPost to add your newly created BlogComment to its comments array.




    blogPost2.addComment("some new coments");

// TODO: Print the meta data for both the BlogPost and the BlogComment to the console.

    post.addComment(comment);