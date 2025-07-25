export interface LoginRes {
  id: number;
  username: string;
  status: number;
  token: {
    id: number;
    user_id: number;
    created_at: number;
    updated_at: string | null;
    last_used_at: number;
    expires: number;
    user_agent: string | null;
    token: string;
    data: string | null;
    status: number;
    type: string | null;
    phone: string | null;
    position_id: number | null;
  };
}

export interface LoginParams {
  body: ILoginBody;
  queryParams: { include?: string };
}

export interface ILoginBody {
  username: string;
  password: string;
}
