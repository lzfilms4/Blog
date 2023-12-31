import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entityes/Article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    view: ArticleView,
    page: number,
    limit?: number,
    hasMore: boolean,

    _inited: boolean
}
