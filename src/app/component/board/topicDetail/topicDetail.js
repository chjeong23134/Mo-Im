class TopicDetailController {
    constructor() {
        this.topic = 
            {
                topicId: "#777777",
                topicDate: "2020-04-12",
                topicStatus: "진행중",
                topicCreater: "정찬희",
                topicTagMember: "정찬희",
                topicContents: `안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요`,
                topicLastComment: {
                    commentDate: "2020-04-12",
                    commentCreater: "정찬희",
                    commentContents: "네 안녕하세요"
                }
            }
    }
}

export default {
    url: "/detail",
    controller: TopicDetailController,
    template: require('./topicDetail.html'),
    controllerAs: '$ctrl'
}