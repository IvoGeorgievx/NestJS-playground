import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoResolver } from './todo/todo.resolver';
import { TodoService } from 'src/todo/todo.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'schema.gql',
        }),
    ],
    providers: [TodoResolver, TodoService],
})
export class GraphqlModule {}
