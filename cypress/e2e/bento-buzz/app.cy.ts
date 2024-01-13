import { decode } from "he";

describe('Bento Buzz', () => {
    beforeEach(() => {
        cy.fixture('articles.json').as('articles').then((articles) => {
            cy.intercept('GET', 'http://bento-buzz.us-east-2.elasticbeanstalk.com/', articles).as('getArticles');
        });
        cy.visit('http://localhost:3000/');
    });

    it('should navigate user to the github page', () => {
        cy.get('a[href="https://github.com/eccentricdz/bento-buzz"]').contains('Github').should('have.attr', 'target', '_blank');
    });

    it('should intercept request for articles', () => {
        cy.wait('@getArticles').then((interception) => {
            cy.get('@articles').then((articles) => {
                expect(interception.response.statusCode).to.equal(200);
                expect(interception.response.body).to.deep.equal(articles);
            });
        });
    })

    it('should display articles', () => {
        cy.get<Array<any>>('@articles').then((articles) => {
            cy.get('article').should('have.length', articles.length);
            articles.forEach(({ link, title }) => {
                cy.get('article').contains(decode(title)).parent().parent().should('have.attr', 'href', link).should('have.attr', 'target', '_blank');
            });
        });
    });
});