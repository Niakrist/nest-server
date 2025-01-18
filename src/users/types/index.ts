import { ApiProperty } from '@nestjs/swagger';

// /login
export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: '12345' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: { user: { userId: 1, username: 'Ivan', email: 'ivan@gmail.com' } },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

// /logout
export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

// /login-check
export class LoginCheckUserResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

// /signup
export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'password' })
  password: string;

  @ApiProperty({ example: 'ivan@mail.ru' })
  email: string;

  @ApiProperty({ example: '2025-01-18T12:00:32.585Z' })
  updatedAt: string;

  @ApiProperty({ example: '2025-01-18T12:00:32.585Z' })
  createdAt: string;
}
