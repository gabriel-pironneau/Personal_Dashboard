import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Youtube } from '../models/Youtube.model';

@Injectable()
export class WidgetService {

    public youtubeVideos: Youtube[] = [
        {
            _id: '324sdfmoih3',
            title: 'Stay See',
            picture: {
                default: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s88-c-k-c0xffffffff-no-rj-mo',
                    width: 88,
                    height: 88
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        },
        {
            _id: '324sdfmoih3',
            title: 'Mr Suicide Sheep',
            picture: {
                default: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s88-c-k-c0xffffffff-no-rj-mo',
                    width: 88,
                    height: 88
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        },
        {
            _id: '324sdfmoih3',
            title: 'Mr Suicide Sheep',
            picture: {
                default: {
                    url: 'https://yt3.ggpht.com/a/AATXAJxl4vCX8iMx7ROetW2BOhrWsixmTG6NjYFtuA=s88-c-k-c0xffffffff-no-rj-mo',
                    width: 88,
                    height: 88
                }
            },
            videos: [
                {
                    title: 'JackLNDN - Twisted',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/b9xzh10s6_Q/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '27/5/2020',
                    views: '11631'
                },
                {
                    title: 'Feeling Happy - Stay See Summer Mix 2020',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/-XZR6yGpi60/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '19/5/2020',
                    views: '117357'
                },
                {
                    title: 'Fabich - Can\'t Even Be',
                    picture: {
                        default: {
                            url: 'https://i.ytimg.com/vi/l2wqALgBjq4/default.jpg',
                            width: 120,
                            height: 90
                        }
                    },
                    date: '6/5/2020',
                    views: '20096'
                }
            ]
        }
    ];
    //public youtube$ = new Subject

    constructor(private http: HttpClient) {}
}
