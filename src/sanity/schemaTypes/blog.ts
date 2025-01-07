import {defineField, defineType} from "sanity";


export default defineType ({ 
    name: 'blog',
    title : "Blog",
    type :'document',
    fields:[
        defineField ({
            name:'title',
            title: 'Title',
            type : "string"
           }), 
          defineField ( {
            name : 'description',
            title : 'description',
            type: "text"
           }),

       defineField ({
           name : 'slug',
           title : 'slug',
           type : "slug",
          options: {
            source : "title",
            maxLength : 200

          }


          }),

       defineField   ({

            name: "image",
            title : "image",
            type : "image",
            options :{
                hotspot : true
            }
          }), 
    ]
})