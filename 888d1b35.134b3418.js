(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),o=(n(0),n(390)),a={title:"Usage with MongoDB"},c={id:"version-3.2/usage-with-mongo",title:"Usage with MongoDB",description:"To use `mikro-orm` with mongo database, do not forget to install `mongodb` dependency. As `MongoDriver`",source:"@site/versioned_docs/version-3.2/usage-with-mongo.md",permalink:"/docs/3.2/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.2/usage-with-mongo.md",version:"3.2",sidebar:"version-3.2/docs",previous:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/3.2/usage-with-sql"},next:{title:"Using MikroORM with NestJS framework",permalink:"/docs/3.2/usage-with-nestjs"}},l=[{value:"Defining entity",id:"defining-entity",children:[]},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[]},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[]},{value:"Native collection methods",id:"native-collection-methods",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",Object(o.b)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",Object(o.b)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),Object(o.b)("p",null,"Then call ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  clientUrl: '...',\n});\n")),Object(o.b)("h2",{id:"defining-entity"},"Defining entity"),Object(o.b)("p",null,"When defining entity, implement ",Object(o.b)("inlineCode",{parentName:"p"},"MongoEntity<T>")," interface and do not forget to define\nprimary key like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string;\n")),Object(o.b)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),Object(o.b)("p",null,"Every entity has both ",Object(o.b)("inlineCode",{parentName:"p"},"ObjectId")," and ",Object(o.b)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),Object(o.b)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),Object(o.b)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),Object(o.b)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),Object(o.b)("h2",{id:"native-collection-methods"},"Native collection methods"),Object(o.b)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",Object(o.b)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),Object(o.b)("p",null,"Those methods execute native driver methods like Mongo's ",Object(o.b)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),Object(o.b)("p",null,"They are also available as ",Object(o.b)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),Object(o.b)("p",null,"There is also shortcut for calling ",Object(o.b)("inlineCode",{parentName:"p"},"aggregate")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}d.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,m=p["".concat(a,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);