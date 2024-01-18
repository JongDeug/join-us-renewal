/** @type {import('./$types').LayoutLoad} */
export function load({url}) {
    let slug = url.pathname.split('/');

    return {
        sections: [
            {slug: 'profile', title: '소개 프로필', which: slug[3]},
            {slug: 'account', title: '회원 정보', which: slug[3]},
            {slug: 'activity', title: '활동 내역', which: slug[3]},
            {slug: 'friend', title: '친구', which: slug[3]},
        ],
        options: {
            messenger: [
                {title: '쪽지쓰기', value: 'write'},
                {title: '받은쪽지함', value: 'receive'},
                {title: '보낸쪽지함', value: 'send'},
                {title: '휴지통', value: 'trash'},
            ],
            spaces: [
                {title: '최근 접속', value: 'recent'},
                {title: '내가 만든 공간', value: 'hand-made'},
            ],
            activity: [
                {title: '게시글', value: 'post'},
                {title: '댓글', value: 'comment'},
                {title: '개인 개발 노트', value: 'note'}
            ],
            friend: [
                {title: '팔로워', value: 'followers'},
                {title: '팔로잉', value: 'following'},
                {title: '팔로우 요청', value: 'followRequest'}
            ]
        }


    }
}