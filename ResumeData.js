let myResume={
    "basics":{
        "Name":"A Pradeep Kumar",
        "Email":"pradeepak571@gmail.com",
        "Phone":1234567689,
        "Degree":"B.Tech",
        "Location":{
            "address":"41A Puduvalasu K G Valasu(post),Erode",
            "Pin-code":638051,
            "City":"Erode",
            "State":"Tamil Nadu",
            "Country":"India"
        }
    },
    "Profiles":[
        {
            "website":"https://pradeepak571.000webhostapp.com/",
            "GitHub":"https://github.com/Pradeepak5",
            "LinkedIn":"https://www.linkedin.com/in/a-pradeep-kumar-577b761b5/",
            "Medium":"https://medium.com/@pradeepak571",
            "Guvi":"https://www.guvi.in/pradeepak57143"
        }
    ],
    "Work-Experience":[
        {
            "Company":"Harman Internationals",
            "Position":"Associate Engineer - Product Development",
            "Start Date":"6 May 2022",
            "End Date":"currently working here",
            "Summary":"Working in a DotNet Field"
        },
    ],
    "Education":[
        {
            "Institute":"Government college of Engineering,Erode",
            "Department":"Information Technology",
            "Start Date":2018,
            "End Date":2022,
            "CGPA":7.8
        }
    ],
    "Skills":[
        {
            "Programming Language":"Java, Python, C#, Kotlin, HTML, CSS, Bootstarp, JavaScript, React, Python FullStack, MERN Stack",
            "Projects":"Movie Tickect Booking Application"
        }
    ]
}
    
for(let x in myResume){
    console.log(x+" : ",myResume[x]);
}