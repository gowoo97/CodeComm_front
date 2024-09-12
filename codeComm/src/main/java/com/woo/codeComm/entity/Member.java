package com.woo.codeComm.entity;

import com.woo.codeComm.dto.MemberDto;
import jakarta.persistence.*;
import lombok.Builder;

@Entity
@Table(name = "Member")
@Builder
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "pw")
    private String pw;

    @Column(name = "nickname")
    private String nickname;


    public MemberDto toDto(){
        return MemberDto.builder()
                .id(id)
                .email(email)
                .pw(pw)
                .nickname(nickname)
                .build();
    }
}
