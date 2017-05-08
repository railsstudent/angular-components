import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;

  console.log(template);

  //beforeEach(window.module(blog.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    // TODO: test the directive to make sure it has the
    // right DDO and template and controller
    let ddo;
    beforeEach(() => {
        ddo = blogDirective();
    });
    
    it ('should have the right template, controller', () => {
        expect(ddo.controller).to.equal(BlogController);
        expect(ddo.template).to.equal(template);
        expect(ddo.scope).to.be.an('object');
        expect(ddo.controllerAs).to.be.a('string');
    });
  });

  describe('controller', ()=> {
    // TODO: test the controller
    it('should have an appropriate controller', () => {
      const controller = makeController();
      expect(controller.posts).to.be.an('array');
      expect(controller.message).to.be.a('string');
    });
  });

  describe('template', ()=> {
    // TODO: test the template? yup
    // get creative
    console.log(template);
  });
});
