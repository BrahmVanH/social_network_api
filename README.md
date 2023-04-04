Models
    User
        username
        email
        thoughts (array of _id values references thought model)
        friends (array of _id values referencing the user model (self-reference))
        Settings
            virtual('friend count')
    Thought
        thought text
        createdAt
        username
        reactions
        settings
            virtual('reactionCount')
    Reaction (SCHEMA ONLY... ?)
        reactionId
        reactionBody
        username
        createdAt
        this is not a model, use this stuff as the reaction fields SUBDOCUMENT schema in throught model

Routes
    /api/users
        get all users
        get a singe user by id
        post new user
        put to update user by its id
        delete to remove user by id
    /api/users/:userId/friends/:friendId
        post to add a new friend to a users friend list
        delete to remove a friend from a users friend list
    
    /api/thoughts/
        get to get all thoughts
        get to get a single thought by _id
        post o create a new thought (push the created thoughts id to the associated users thought array field)
        put to update a thought by id
        delete to remove a thought by its id
    
    /api/thoughts/:thoughtId/reactions
        POST to create a reaction stored in a single thought's reactions array field
        DELETE to pull and remove a reaction by the reaction's reactionId value
    