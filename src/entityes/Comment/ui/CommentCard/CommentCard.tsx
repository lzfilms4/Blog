import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Avatar from 'shared/ui/Avatar/Avatar';
import TextField from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment: Comment,
    isLoading?: boolean
}

const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar className={cls.avatar} src={comment.user.avatar} size={50} /> : null}
                <TextField className={cls.username} title={comment.user.username} />
            </div>
            <TextField className={cls.text} text={comment.text} />
        </div>
    );
});

export default CommentCard;