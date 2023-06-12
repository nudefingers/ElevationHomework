const quiz = {
    code: function() {console.log(this.answers.c + ' is not the answer')},
    answers: {
        a: `answers`,
        b: 'this is not the answer',
        c: `this`,
        d: `21`,
        e: `both a and c`,
        f: 'both a and d'
    }
}

quiz.code()