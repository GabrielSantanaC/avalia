import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Course } from "./Course";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    description: string

    @Column()
    user_id: string;

    @JoinColumn({ name: "user_id" })
    @OneToOne(() => User)
    user: User;

    @Column()
    course_id: string;

    @JoinColumn({ name: "course_id" })
    @ManyToOne(() => Course)
    course: Course;

    @Column()
    rating: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment }