import React, {Component} from 'react';
import axios from 'axios';

export function loadLists(){
    return [
        {
            title: 'Wish',
            creatable: true,
            cards: [
                {
                    id:1,
                    content: 'bla bla bla bla bla',
                    labels: ['#719c1'],
                    user: ''
                },
                {
                    id:2,
                    content: 'bla bla bla bla bla',
                    labels: ['#FFF'],
                    user: ''
                },
                {
                    id:3,
                    content: 'bla bla bla bla bla',
                    labels: ['#FFF'],
                    user: ''
                },
                {
                    id:4,
                    content: 'bla bla bla bla bla',
                    labels: ['#FFF'],
                    user: ''
                },
                {
                    id:5,
                    content: 'bla bla bla bla bla',
                    labels: ['#FFF'],
                    user: ''
                },
               
            ]
        },
        {
        title: 'Applied',
        creatable: false,
        cards: [
            {
                id:1,
                content: 'bla bla bla bla bla',
                labels: ['#719c1'],
                user: ''
            },
            {
                id:2,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:3,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:4,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:5,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
           
        ]
    },

    {
        title: 'Screening ',
        creatable: false,
        cards: [
            {
                id:1,
                content: 'bla bla bla bla bla',
                labels: ['#719c1'],
                user: ''
            },
            {
                id:2,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:3,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:4,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:5,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
           
        ]
    },
    {
        title: 'Code Challenge ',
        creatable: false,
        cards: [
            {
                id:1,
                content: 'bla bla bla bla bla',
                labels: ['#719c1'],
                user: ''
            },
            {
                id:2,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:3,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:4,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
            {
                id:5,
                content: 'bla bla bla bla bla',
                labels: ['#FFF'],
                user: ''
            },
           
        ]
    },

    ]
}