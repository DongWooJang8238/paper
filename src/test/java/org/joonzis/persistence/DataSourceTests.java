package org.joonzis.persistence;

import static org.junit.Assert.fail;

import java.sql.Connection;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.extern.log4j.Log4j;

@Log4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
   // ㄴ root-context.xml를 기준으로 잡아준 것 
      //ㄴ ex)0. ct객체 생성 후  1. ctx.getBean 
public class DataSourceTests {
   
   @Autowired
   // ㄴcontext.xml파일의 bean중에 아이디가 dataSource가 있다면 자동으로 매핑
   private DataSource dataSource;
   @Autowired
   private SqlSessionFactory sqlSessionFactory;

   @Test
   public void testConnection() {
      try(Connection conn = dataSource.getConnection()) {
         log.info(conn);
      } catch (Exception e) {
         fail(e.getMessage());
      }
      
   }
   
   @Test
   public void testMyBatis() {
      try(SqlSession session = sqlSessionFactory.openSession()) {
         log.info(session);
      } catch (Exception e) {
         fail(e.getMessage());
      }
      
   }
   
}
