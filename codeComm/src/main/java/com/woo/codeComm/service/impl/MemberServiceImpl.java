package com.woo.codeComm.service.impl;

import com.woo.codeComm.dto.MemberDto;
import com.woo.codeComm.entity.Member;
import com.woo.codeComm.repository.MemberRepository;
import com.woo.codeComm.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Override
    public MemberDto signup(MemberDto member) {

        Member memberEntity = member.toEntity();

        Member saved = memberRepository.save(memberEntity);

        return saved.toDto();
    }
}
